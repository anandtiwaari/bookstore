import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Card = ({
  title,
  author,
  price,
  isFavourite,
  AddToFavourite,
  id,
  removeFromFavourite,
  setShowDeleteModal,
  setDeleteId,
}) => {
  return (
    <div>
      <div className="block max-w-[18rem] rounded-lg bg-neutral-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-600 mb-2 mr-2">
        <div className="border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50">
          <div className="flex justify-between items-center">
            <span>{author}</span>

            <span>
              {isFavourite ? (
                <IoBookmark
                  color="yellow"
                  size="1.2rem"
                  onClick={() => {
                    removeFromFavourite(id);
                  }}
                />
              ) : (
                <CiBookmark
                  color="white"
                  size="1.2rem"
                  onClick={() => {
                    AddToFavourite(id);
                  }}
                />
              )}
            </span>
            {/* )} */}
          </div>
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50">
            {title}
          </h5>
          <p className="text-base text-white dark:text-neutral-50">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-grey-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <span className="WebRupee">&#x20B9; </span>
              {price}
            </button>
            <span>
              <MdDelete
                onClick={() => {
                  setShowDeleteModal(true);
                  setDeleteId(id);
                }}
                color="red"
                size="1.4rem"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
