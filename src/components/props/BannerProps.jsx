import PropTypes from 'prop-types';

const BannerProps = ({ title, subtitle, backgroundImage }) => {
    return (
        <div
            className="relative flex items-center justify-center lg:h-[500px] h-[300px] text-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Semi-Transparent Black Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* Content */}
            <div className="relative z-10 text-white">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

BannerProps.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    backgroundImage: PropTypes.string.isRequired,
};

export default BannerProps;
