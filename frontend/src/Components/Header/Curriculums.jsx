import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function CurriculumsMenu() {
  const { t } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const orangeColor = "#FB5B21";
  const white = "#FFFFFF";
  const grey = "#807F93";

  const buttonStyle2 = {
    backgroundColor: white,

    margin: "20px",
  };

  return (
    <>
      <Dropdown show={isDropdownOpen} onToggle={(isOpen) => setDropdownOpen(isOpen)}>
        <Dropdown.Toggle
          style={{ ...buttonStyle2 }}
          variant="outline-seconda"
          id="dropdown-basic"
        ><FontAwesomeIcon icon={faFileArrowDown} style={{ marginRight: "10px" }}/>
          {t("curriculum")}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            href="/assets/Curriculums/Curriculum Vitae (EN).pdf"
            target="_blank"
            download="Curriculum Vitae (EN).pdf"
          >
            Curriculum Vitae (EN)🇺🇸
          </Dropdown.Item>
          <Dropdown.Item
            href="/assets/Curriculums/Curriculum Vitae (ES).pdf"
            target="_blank"
            download="Curriculum Vitae (ES).pdf"
          >
            Curriculum Vitae (ES)🇪🇸
          </Dropdown.Item>
          {/* Puedes agregar más elementos Dropdown.Item para otros currículos */}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default CurriculumsMenu;

