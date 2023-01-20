import * as nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";

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

    const __dirname = path.resolve();
    const filePath = path.join(__dirname, "src/emails/template.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);

    const replacements = {
      username: "Vistoria médica",
    };
    const htmlToSend = template(replacements);

    const message = {
      from: "capju.eps.mds@gmail.com",
      to: "capju.eps.mds@gmail.com",
      subject: "Atrasos nos processos",
      text: "Olá, esse é um e-mail automático para informar os processos atrasados.",
      html: htmlToSend,
      attachments: [{
        filename: "capju.png",
        path: __dirname + "/src/emails/capju.png",
        cid: "capju",
      },
      {
        filename: "justica_federal.png",
        path: __dirname + "/src/emails/justica_federal.png",
        cid: "justica_federal",
      },
      {
        filename: "UnB.png",
        path: __dirname + "/src/emails/UnB.png",
        cid: "UnB",
      },],
    };

    transport.sendMail(message, (err) => {
      if (err) return res.json({ message: "Erro ao enviar email" });
    });

    return res.json({ message: "Email enviado com sucesso" });
  }
}

export default new EmailController();
