import * as nodemailer from "nodemailer";

class EmailController {
  async sendEmail(req, res) {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "capju.eps.mds@gmail.com",
        pass: "gcoroacnwfmcfbus",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const message = {
      from: "capju.eps.mds@gmail.com",
      to: "capju.eps.mds@gmail.com",
      subject: "Processos atrasados",
      text: "Olá, esse é um e-mail automático para informar os processos atrasados.",
      html: `
      <div class="table-wrapper">
      <table class="fl-table">
        <thead>
          <tr>
            <th>Fluxo</th>
            <th>Processo</th>
            <th>Etapa</th>
            <th>Data de inicio</th>
            <th>Duração (em dias)</th>
            <th>Tempo atrasado (em dias)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fluxo de aposentadoria</td>
            <td>132456</td>
            <td>Peritagem médica</td>
            <td>01/01/2023</td>
            <td>10</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Fluxo de aposentadoria</td>
            <td>654321</td>
            <td>Vistoria médica</td>
            <td>10/01/2023</td>
            <td>5</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Fluxo de aposentadoria</td>
            <td>753951</td>
            <td>Aprovação do juiz</td>
            <td>10/01/2023</td>
            <td>5</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Fluxo de invalidez</td>
            <td>745896</td>
            <td>Peritagem médica</td>
            <td>10/12/2022</td>
            <td>30</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Fluxo de invalidez</td>
            <td>123321</td>
            <td>Peritagem médica</td>
            <td>02/01/2023</td>
            <td>8</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Fluxo de divorcio</td>
            <td>741852</td>
            <td>Assinatura do advogado</td>
            <td>28/12/2022</td>
            <td>7</td>
            <td>13</td>
          </tr>
          <tr>
            <td>Fluxo trabalhista</td>
            <td>963852</td>
            <td>Pagamento</td>
            <td>10/01/2023</td>
            <td>3</td>
            <td>4</td>
        </tr>
        </tbody>

        <tbody></tbody>
      </table>
    </div>
      `,
    };

    transport.sendMail(message, (err) => {
      if (err) return res.json({ message: "Erro ao enviar email" });
    });

    return res.json({ message: "Email enviado com sucesso" });
  }
}

export default new EmailController();
