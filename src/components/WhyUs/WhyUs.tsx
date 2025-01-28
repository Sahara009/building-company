import { Container } from "@mui/material";
import { CornerDownRight } from "lucide-react";
import "./whyUs.scss";

import React from "react";

interface Props {
  className?: string;
}

export const WhyUs: React.FC<Props> = () => {
  const sections = [
    {
      title: "Лучшая цена",
      description:
        "Проект - это деятельность, направленная на создание уникального продукта или услуги, и, следовательно, деятельность, которая осуществляется для того, чтобы придать ему очертания.",
    },
    {
      title: "Постоянная консультация",
      description:
        "Один из наиболее распространенных вопросов, основанных на компетенциях, для любого проекта, который позволяет клиенту легко получить консультацию о недвижимости..",
    },
    {
      title: "Кастомный дизайн",
      description:
        "Проект определяется как последовательность задач, которые должны быть выполнены для достижения определенного результата. Приспосабливаясь к проекту с индивидуальным дизайном.",
    },
    {
      title: "Премиальное качество",
      description:
        "Убедитесь, что все, что мы используем, высшего качества и не превышает установленных сроков. Это поможет начать работу и повысит вашу уверенность",
    },
  ];

  return (
    <div className="whyUs">
      <Container maxWidth="lg">
        <div className="title" style={{ marginTop: "90px" }}>
          <CornerDownRight size={50} />
          <h3>Почему мы?</h3>
        </div>
        <div className="grid-container">
          {sections.map((section, index) => (
            <div key={index} className="grid-item">
              <h1 className="grid-title">{section.title}</h1>
              <p className="grid-description">{section.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
