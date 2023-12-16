

const Loading = () => {

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            document.querySelector(".loader-container").style.display = "none";
        }, 2500);
    });

    return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    );
};

export default Loading;