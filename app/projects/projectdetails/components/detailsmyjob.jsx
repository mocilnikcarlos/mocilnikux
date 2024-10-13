import style from "./detailsmyjob.module.scss";

const DetailsMyJob = ({ design, date, svg }) => {
  return (
    <div className={style.contentdetailsmyjob}>
      <p className={style.text}>
        Cargo:<span>{design}</span>
      </p>
      <p className={style.text}>
        Fecha:<span>{date}</span>
      </p>
      <p className={style.text}>
        Cliente/Producto:<span>{svg}</span>
      </p>
    </div>
  );
};

export default DetailsMyJob;
