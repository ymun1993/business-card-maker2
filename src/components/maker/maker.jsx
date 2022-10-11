import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Young",
      company: "Microsoft",
      theme: "dark",
      title: "Frontend Developer",
      email: "Young@gmail.com",
      message: "you can do it",
      fileName: "Young",
      fileURL: null,
    },
    {
      id: "2",
      name: "Young2",
      company: "Microsoft",
      theme: "light",
      title: "Frontend Developer",
      email: "Young@gmail.com",
      message: "you can do it",
      fileName: "Young",
      fileURL: null,
    },
    {
      id: "3",
      name: "Young3",
      company: "Microsoft",
      theme: "colorful",
      title: "Frontend Developer",
      email: "Young@gmail.com",
      message: "you can do it",
      fileName: "Young",
      fileURL: null,
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
