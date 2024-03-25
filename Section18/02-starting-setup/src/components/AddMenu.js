import { useRef, useState, useEffect } from "react";
import Modal from "./UI/Modal";

const isEmpty = (value) => value.trim() === "";

const Addmenu = (props) => {
  const [isMealAdded, setIsMealAdded] = useState(false);
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    description: true,
    price: true,
  });

  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();

  useEffect(() => {
    if (!props.meal) return;
    nameInputRef.current.value = props.meal.name;
    descriptionInputRef.current.value = props.meal.description;
    priceInputRef.current.value = props.meal.price;
  }, [props.meal]);

  const confirmHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredDescriptionIsValid = !isEmpty(enteredDescription);
    const enteredPriceIsValid = !isEmpty(enteredPrice);

    setFormInputsValidity({
      name: enteredNameIsValid,
      description: enteredDescriptionIsValid,
      price: enteredPriceIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredDescriptionIsValid && enteredPriceIsValid;

    if (!formIsValid) {
      return;
    }

    await props.onConfirm({
      name: enteredName,
      description: enteredDescription,
      price: enteredPrice,
    });
    setIsMealAdded(true);
  };

  return (
    <Modal onClose={props.onClose}>
      {isMealAdded ? (
        <div>
          <p>Successfully Added</p>
          <button onClick={props.onClose}>Close</button>
        </div>
      ) : (
        <form onSubmit={confirmHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={nameInputRef} />
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" ref={descriptionInputRef} />
            {!formInputsValidity.description && (
              <p>Please enter a valid description!</p>
            )}
          </div>
          <div>
            <label htmlFor="price">price</label>
            <input type="text" id="price" ref={priceInputRef} />
            {!formInputsValidity.price && <p>Please enter a valid price!</p>}
          </div>
          <div>
            <button type="submit"> Confirm</button>
            <button type="button" onClick={props.onClose}>
              Close
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};
export default Addmenu;
