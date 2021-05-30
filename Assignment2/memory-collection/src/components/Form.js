import { useInput } from "../hooks/input-hook";

export default function Form(props) {
    const { value: imageName, bind: bindImageName, reset: resetImageName } = useInput('');
    const { value: imageURL, bind: bindImageURL, reset: resetImageURL } = useInput('');

    const clearFields = (evt) => {
        evt.preventDefault();
        // alert(`Submitting Name ${imageName} ${imageURL}`);
        resetImageName();
        resetImageURL();
    }

    return (
        <form onSubmit={clearFields}>
            <label>
                Image Name:
                <input class="textbox" id="imageName" name="imageName" type="text" {...bindImageName} />
            </label>
            <br />
            <label>
                Image URL:
                <input class="textbox" type="text" id="imageURL" name="imageURL" {...bindImageURL} />
            </label>
            <br />
            <input class="button" type="button" value="Add Photo" />
            <input class="button" type="submit" value="Clear Fields" />
        </form>
    );
}
