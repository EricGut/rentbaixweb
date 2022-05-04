import React, { useEffect } from 'react'

export const IframeHome = () => {
    const iframe = '<iframe id="karve-iframe" width="100%" height="100px" frameBorder="0" scrolling="no" data-src="https://iframes.karveinformatica.com/RentbaixIframe/views/home.php?lang=es"></iframe>'
    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
    }
    useEffect(() => {
        const script1 = document.createElement('script');
        const script2 = document.createElement('script');

        script1.src = "https://iframes.karveinformatica.com/RentbaixIframe/custom/custom-events.js";
        script1.async = true;
        script2.src = "https://iframes.karveinformatica.com/RentbaixIframe/js/iframe-comunication-parent.js";
        script2.async = true;

        document.body.appendChild(script1);
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        }
    }, []);
    return (
        <Iframe iframe={iframe} />
    )
}
