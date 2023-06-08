import axios from 'axios';

const baseUrl =  'http://tintoria.net.br/ws';

async function request(data) {
  const xmls = `<?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope
      xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
      SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
    <SOAP-ENV:Body> 
      ${data}
    </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>`;

  console.log(xmls);

  try {
    const response = await axios.post(`${baseUrl}/tintoria_soapserver.php?wsdl`, xmls,
      {headers: {'Content-Type': 'applicationS/xml'}},
    );

    console.log(response.data);

    const res = JSON.parse(
      response.data.substring(
        response.data.indexOf('<return xsi:type="xsd:string">') +
          '<return xsi:type="xsd:string">'.length,
        response.data.indexOf('</return>'),
      ),
    );
    if (res.err_msg) {
      return {
        error: true,
        message: `${res.err_msg}`,
      };
    } else {
      return {
        error: false,
        data: res,
      };
    }
  } catch (error) {
    return {
      error: true,
      message: `${error}`,
    };
  }
}

export function login(UID) {
  const xmls = `<m:getConexaoJSON xmlns:m="${baseUrl}/getConexaoJSON">
    <uid>${UID}</uid>
  </m:getConexaoJSON>`;
  return request(xmls);
}

export function getInitialParams(laundryId, laundryPassword) {
  const xmls = `<m:getParametrosIniciaisJSON xmlns:m="${baseUrl}/getParametrosIniciaisJSON">
    <gdb>${laundryId}</gdb>
    <dbp>${laundryPassword}</dbp>
  </m:getParametrosIniciaisJSON>`;
  return request(xmls);
}