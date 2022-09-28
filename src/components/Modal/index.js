import "./style.css";

export const Modal = (props) => {
  const { selectedAssetId, selectedAssetImg, selectedAssetName, onCloseModal } =
    props;

  const onAddToBasketClick = () => {
    const currBasket = sessionStorage.getItem("c_minton_basket");
    let newBasket = !!currBasket ? JSON.parse(currBasket) : [];
    newBasket.push(selectedAssetId);
    sessionStorage.setItem("holelizabeth_basket", JSON.stringify(newBasket));
    onCloseModal();
  };

  return (
    <div id="modal">
      <p id="close-modal-icon" onClick={onCloseModal}>
        ✕
      </p>
      <img src={selectedAssetImg} alt="" />
      {selectedAssetName && <p>{selectedAssetName}</p>}
      <button id="add-to-basket" onClick={onAddToBasketClick}>
        Add To Basket
      </button>
    </div>
  );
};
