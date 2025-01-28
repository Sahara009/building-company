import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React from "react";
import "./faq.scss";

interface Props {
  className?: string;
}

export const FAQ: React.FC<Props> = () => {
  return (
    <div className="accordion">
      <Container maxWidth="lg">
        <h4 className="acc__title">◦ Часто задаваемые вопросы</h4>
        <Accordion slotProps={{ heading: { component: "h4" } }} className="acc">
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Какие услуги вы предоставляете?
          </AccordionSummary>
          <AccordionDetails>
            Мы предоставляем полный спектр строительных услуг, включая
            проектирование, строительство жилых и коммерческих объектов, ремонт
            и отделку помещений, а также ландшафтные работы и работы по
            улучшению инфраструктуры.
          </AccordionDetails>
        </Accordion>

        <Accordion className="acc" slotProps={{ heading: { component: "h4" } }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Каковы сроки выполнения строительных работ?
          </AccordionSummary>
          <AccordionDetails>
            Сроки выполнения зависят от объема и сложности проекта. Обычно мы
            предоставляем детальный план работ с указанием всех этапов и сроков.
            После обсуждения всех деталей мы сможем точно сказать, когда
            завершатся работы.
          </AccordionDetails>
        </Accordion>

        <Accordion className="acc" slotProps={{ heading: { component: "h4" } }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Какие материалы вы используете?
          </AccordionSummary>
          <AccordionDetails>
            Мы используем только качественные и сертифицированные материалы от
            проверенных поставщиков. Мы предлагаем широкий выбор материалов,
            включая экологичные и энергосберегающие решения.
          </AccordionDetails>
        </Accordion>

        <Accordion className="acc" slotProps={{ heading: { component: "h4" } }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Какова стоимость строительных услуг?
          </AccordionSummary>
          <AccordionDetails>
            Стоимость зависит от сложности проекта, объема работ и выбранных
            материалов. Мы предоставляем индивидуальную смету после того, как
            получим все детали вашего проекта. Окончательная стоимость будет
            согласована перед началом работ.
          </AccordionDetails>
        </Accordion>

        <Accordion className="acc" slotProps={{ heading: { component: "h4" } }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Есть ли у вас лицензия и сертификаты?
          </AccordionSummary>
          <AccordionDetails>
            Да, наша компания имеет все необходимые лицензии и сертификаты для
            выполнения строительных работ, а также соблюдает все стандарты
            безопасности и качества.
          </AccordionDetails>
        </Accordion>

        <Accordion className="acc" slotProps={{ heading: { component: "h4" } }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Какую ответственность вы несете за безопасность на объекте?
          </AccordionSummary>
          <AccordionDetails>
            Мы строго соблюдаем все строительные нормы и правила безопасности.
            Наши специалисты обеспечивают безопасность как на строительной
            площадке, так и для всех людей, находящихся рядом с объектом. Также
            мы страхуем ответственность компании за возможные риски.
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};
