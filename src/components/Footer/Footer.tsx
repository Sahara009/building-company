import { Container } from "@mui/material";
import React, { useState } from "react";
import "./footer.scss";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="footer">
      <Container maxWidth="lg">
        <div className="connect">
          <div className="text">
            Итак, чего вы ждёте? Давайте обсудим ваш проект!
          </div>
          <div>
            <ul className="contacts">
              <li onClick={() => handleCopy("email.email.ru")}>
                email.email.ru
              </li>
              <li onClick={() => handleCopy("+7 (999) 999-99-99")}>
                +7 (999) 999-99-99
              </li>
              <li>По всей Пензенской области</li>
            </ul>
          </div>
          {copied && (
            <div className="copy-notification">
              Текст "{copied}" скопирован!
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
