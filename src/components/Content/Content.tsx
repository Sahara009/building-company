import { Container } from "@mui/material";
import React from "react";
import "./content.scss";

interface Props {
  className?: string;
}

export const Content: React.FC<Props> = () => {
  return (
    <div className="content">
      <Container maxWidth="lg">
        <div className="description">
          <div className="title">
            <h1>Ваш надежный партнер в мире строительных решений!</h1>
          </div>
          <div className="text">
            <h2>О нас</h2>
            <p>
              Мы используем современные технологии и оборудование, что позволяет
              нам производить бетон любой марки и назначения. Наша продукция
              идеально подходит для строительства жилых и промышленных объектов,
              а также для дорожных работ и благоустройства территорий.{" "}
            </p>
          </div>
        </div>

        <div className="background-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="background-video__content"
          >
            <source
              src="https://cdn.cosmos.so/7f4b86b8-08b2-4d1d-83a2-e2d0855de717.mp4"
              type="video/mp4"
            />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </Container>
    </div>
  );
};
