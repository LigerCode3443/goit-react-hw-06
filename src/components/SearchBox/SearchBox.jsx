import s from "./searchBox.module.css";
export const SearchBox = ({ handleSearch, search }) => {
  return (
    <div className={s.box}>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.input}
        value={search}
        type="text"
        placeholder="enter contacts"
        onChange={handleSearch}
      />
    </div>
  );
};
