import css from "./IsLoading.module.css";

function IsLoading() {

    return (
        <>
        <h2>now loading...</h2>
        <div className={css.loader}></div>
        </>
    )

}

export default IsLoading;