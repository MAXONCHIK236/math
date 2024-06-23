import React, { useState, useEffect } from "react";
import styles from "./Example8.module.scss";
import Header from "../header/header";
import ButtonHint from "../ButtonHint/ButtonHint";
import ButtonNext from "../ButtonNext/ButtonNext";
import Div from "../Div/Div";
import symbol from "../../assents/example8/Group 12.png";
import ButtonMultiplication from "../ButtonMultiplicatio/ButtonMultiplication";
import Div2 from "../Div2/Div2";
import DivforSolve from "../DivforSolve/DivforSolve";
import ColumnMultiplication from "../MultiplicationbyColumn/ColumnMultiplication";
import DivforSolve2 from "../DivforSolve2/DivforSolve2";
import DivSolve from "../DivSolve/DivSolve";
import GreenDiv from "../GreenDiv/GreenDiv";
import good__job from "../../assents/example8/Frame 6.svg";

const Example8 = () => {
  const [rhombusClicked, setRhombusClicked] = useState(0);
  const [multiplicationVisible, setMultiplicationVisible] = useState(false);
  const [step2Completed, setStep2Completed] = useState(false);
  const [step3Completed, setStep3Completed] = useState(false);
  const [div1Completed, setDiv1Completed] = useState(false);
  const [div2Completed, setDiv2Completed] = useState(false);
  const [showStep4Flex, setShowStep4Flex] = useState(false);
  const [step4Visible, setStep4Visible] = useState(true);
  const [step5Visible, setStep5Visible] = useState(false);
  const [step6Visible, setStep6Visible] = useState(false);
  const [rhombusDarkVisible2, setRhombusDarkVisible2] = useState(true);
  const [rhombusDarkVisible3, setRhombusDarkVisible3] = useState(true);
  const [goodJobVisible, setGoodJobVisible] = useState(false);

  const handleClick = () => {
    setRhombusClicked((prevState) => prevState | 1);
  };

  const handleClick2 = () => {
    setRhombusClicked((prevState) => prevState | 2);
  };

  useEffect(() => {
    if (rhombusClicked === 3) {
      setStep2Completed(true);
    }
  }, [rhombusClicked]);

  useEffect(() => {
    if (div1Completed && div2Completed) {
      setStep3Completed(true);
    } else {
      setStep3Completed(false);
    }
  }, [div1Completed, div2Completed]);

  const handleDivforSolve1Complete = () => {
    setDiv1Completed(true);
  };

  const handleDivforSolve2Complete = () => {
    setDiv2Completed(true);
    setMultiplicationVisible(true);
    setShowStep4Flex(true);
  };

  const handleCloseMultiplication = () => {
    setMultiplicationVisible(false);
    setStep4Visible(false);
    setStep5Visible(true);
  };

  const handleColumnMultiplicationCompletion = () => {
    setStep5Visible(true);
  };

  const handleRhombusDarkClick2 = () => {
    setRhombusDarkVisible2(false);
  };

  const handleRhombusDarkClick3 = () => {
    setRhombusDarkVisible3(false);
  };

  useEffect(() => {
    if (!rhombusDarkVisible2 && !rhombusDarkVisible3) {
      setGoodJobVisible(true);
    }
  }, [rhombusDarkVisible2, rhombusDarkVisible3]);

  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.container2}>
          <div className={styles.example8}>
            <div className={styles.example8__content__top}>
              <a>
                Тренажер/Арифметические действия с десятичными дробями
                <br /> Умножение, Деление
              </a>
            </div>
            <div className={styles.example8__content_center}>
              <div className={styles.examples}>
                <div className={styles.solve__example}>
                  <div className={styles.solve__flex}>
                    <p>Решено примеров</p>
                    <div className={styles.solve__flex_dv}>
                      <div>
                        <a>1</a>
                      </div>
                      <a>из</a>
                      <div>
                        <a>15</a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.progress}>
                    <div className={styles.bar}>
                      <div className={styles.bar2} ></div>
                    </div>
                  </div>
                </div>
                <div className={styles.solve__steps}>
                  <h1>Решено этапов в примере</h1>
                  <div className={styles.solve__howmany}>
                    <div>
                      <a> 0 </a>
                    </div>
                    <div>
                      <a> из </a>
                    </div>
                    <div>
                      <a> 15 </a>
                    </div>
                  </div>
                </div>
                <div className={styles.content__right}>
                  <div className={styles.button_hint}>
                    <ButtonHint />
                  </div>
                  <div className={styles.button_next}>
                    <ButtonNext />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.example8__deside}>
            <div className={styles.content__example8__top}>
              <ButtonMultiplication />
            </div>
            <div className={styles.content__example8__column}>
              <div
                className={
                  multiplicationVisible || step3Completed
                    ? styles.hidden
                    : styles.hint
                }
              >
                <div
                  className={`${styles.hint__default} ${
                    step2Completed ? styles.grayBorders : ""
                  }`}
                >
                  <a>Убираем запятые</a>
                </div>
                <div className={styles.hint__hr}>
                  <hr className={styles.hr__left} />
                  <hr className={styles.hr__right} />
                </div>
              </div>
              <div
                className={step6Visible && !goodJobVisible ? styles.hint5 : styles.hidden}
              >
                <div className={`${styles.hint__default_active4} `}>
                  <a>Запятой отделяем 3 знака нажми на правильную</a>
                </div>
              </div>
              <div className={styles.content__example8}>
                <Div
                  number="2"
                  className={step5Visible ? styles.goldenBorder : ""}
                />
                <img src={symbol} alt="symbol" />
                <Div number="7" />
                <div className={styles.multi}></div>
                <div className={styles.content__example8_right}>
                  <Div number="0" />
                  <img src={symbol} alt="symbol" />
                  <Div number="8" />
                  <Div number="5" />
                  <div className={styles.equal}>=</div>
                  <div
                    className={
                      step4Visible && !multiplicationVisible
                        ? styles.step4__flex
                        : styles.hidden
                    }
                  >
                    <Div2 number="2" grayBorders={step2Completed} />
                    <button className={styles.rhombus} onClick={handleClick2}>
                      {!(rhombusClicked & 2) && <a>,</a>}
                    </button>
                    <Div2 number="7" grayBorders={step2Completed} />
                    <div className={styles.multi}></div>
                    <div className={styles.content__example8_right}>
                      <Div2 number="0" grayBorders={step2Completed} />
                      <button className={styles.rhombus} onClick={handleClick}>
                        {!(rhombusClicked & 1) && <a>,</a>}
                      </button>
                      <Div2 number="8" grayBorders={step2Completed} />
                      <Div2 number="5" grayBorders={step2Completed} />
                    </div>
                  </div>
                  <div
                    className={`${styles.step2} ${
                      step2Completed ? styles.flex : styles.hidden
                    }`}
                  >
                    <div className={styles.hint3}>
                      <div
                        className={`${styles.hint__default3} ${
                          step5Visible ? styles.grayBorders : ""
                        }`}
                      >
                        <a>Умножаем</a>
                      </div>
                      <div className={styles.hint__hr}>
                        <hr className={styles.hr__left} />
                        <hr className={styles.hr__right} />
                      </div>
                    </div>
                    <div className={styles.step2__flex}>
                      <div
                        className={
                          multiplicationVisible || step3Completed
                            ? styles.hidden
                            : styles.equal2
                        }
                      >
                        =
                      </div>
                      <DivforSolve
                        correctNumber="27"
                        onComplete={handleDivforSolve1Complete}
                      />
                      <div className={styles.multi}></div>
                      <DivforSolve
                        correctNumber="85"
                        onComplete={handleDivforSolve2Complete}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      step5Visible ? styles.step5__flex : styles.hidden
                    }
                  >
                    <div className={styles.equal2}>=</div>
                    <DivforSolve2 correctNumber="2295" />
                  </div>
                  <div
                    className={
                      step6Visible ? styles.step6__flex : styles.hidden
                    }
                  >
                    <div className={styles.equal3}>=</div>
                    <GreenDiv number="2" />
                    <button className={styles.rhombus__dark}>
                      <a>,</a>
                    </button>
                    <GreenDiv number="2" />
                    <button
                      className={`${styles.rhombus__dark} ${
                        rhombusDarkVisible2 ? "" : styles.hidden
                      }`}
                      onClick={handleRhombusDarkClick2}
                    >
                      <a>,</a>
                    </button>
                    <GreenDiv number="9" />
                    <button
                      className={`${styles.rhombus__dark} ${
                        rhombusDarkVisible3 ? "" : styles.hidden
                      }`}
                      onClick={handleRhombusDarkClick3}
                    >
                      <a>,</a>
                    </button>
                    <GreenDiv number="5" />
                  </div>
                </div>
              </div>
              <div
                className={step5Visible && !goodJobVisible ? styles.hint4 : styles.hidden}
              >
                <div className={`${styles.hint__default_active} `}>
                  <a>Сколько знаков после запятой ?</a>
                </div>
                <DivforSolve
                  correctNumber="3"
                  onComplete={() => setStep6Visible(true)}
                />
              </div>
              <div
                className={`${styles.good__job} ${
                  goodJobVisible ? styles.visible : styles.hidden
                }`}
              >
                <img src={good__job} alt="good__job" />
              </div>
              <div
                className={
                  multiplicationVisible || step3Completed
                    ? styles.hidden
                    : styles.hint__active
                }
              >
                <div
                  className={`${styles.hint__default_active} ${
                    step2Completed ? styles.grayBorders : ""
                  }`}
                >
                  <a>Нажми, запятая пропадет</a>
                </div>
              </div>
            </div>
            <div
              className={`${styles.multiplication} ${
                multiplicationVisible ? styles.fullscreen : styles.hidden
              }`}
            >
              <div className={styles.multiplication__flex}>
                <div className={styles.ColumnMultiplication}>
                <div className={styles.hint__active2}>
                  <div className={styles.hint__default_active2}>
                    <a>черновик</a>
                  </div>
                </div>
                  <ColumnMultiplication
                    onCompletion={handleColumnMultiplicationCompletion}
                  />
                </div>
                <div className={styles.ButtonMultiplication}>
                  <button onClick={handleCloseMultiplication}><a>X</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Example8;
