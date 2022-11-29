import "./Loader.sass";

type LoaderProps = {
    className?: string;
};

export const Loader = ({ className }: LoaderProps) => {
    return (
        <span className={`loader ${className}`}>
            <span className="loader__inner"></span>
        </span>
    );
};
