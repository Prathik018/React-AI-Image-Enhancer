const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className="dark:bg-black shadow-lg rounded-2xl p-6 w-full max-w-2xl">
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-2 border-dashed border-gray-400 rounded-lg p-6 bg-gray-900 text-center hover:border-blue-600 transition-all"
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                />
                <span className="text-lg font-medium text-white">
                    Click and drag to upload your image
                </span>
            </label>
        </div>
    );
};

export default ImageUpload;