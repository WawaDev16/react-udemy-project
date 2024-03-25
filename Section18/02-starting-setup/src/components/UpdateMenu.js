import Modal from "./UI/Modal";

const UpdateMenu = () => {
  return (
    <Modal>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="name">description</label>
          <input type="text" id="description" />
        </div>
        <div>
          <label htmlFor="name">price</label>
          <input type="text" id="price" />
        </div>
        <button>Update</button>
      </form>
    </Modal>
  );
};
export default UpdateMenu;
