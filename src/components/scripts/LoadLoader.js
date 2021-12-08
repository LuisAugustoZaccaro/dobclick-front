const loadPopper = (callback) => {
    const existingScript = document.getElementById('jquery');
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = '../../../public/assets/js/loader.js';
        script.id = 'jquery';
        document.body.appendChild(script);
        
        script.onload = () => {
            if (callback) callback();
        };
    }
    if (existingScript && callback) callback();
};
export default loadPopper;