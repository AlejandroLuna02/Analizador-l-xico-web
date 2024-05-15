import '../styles/Button.css';

const Button = ({ text }) => {
    return (
        <div className="sp">
            <button type="submit" className="sparkle-button">
                <span className="spark"></span>

                <span className="backdrop"></span>
                <span className="text">{text}</span>
            </button>
        </div>
    );
}

export default Button;