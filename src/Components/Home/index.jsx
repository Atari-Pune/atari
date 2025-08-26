import React, { Suspense, lazy } from 'react';
import PageLoader from '../../Routes/PageLoader';
import ImpLinks from '../Footer/ImpLinks';

// Lazy import your image slider
const ImageSlider = lazy(() => import('./Slider/ImageSlider')); // adjust path as needed
const Notification = lazy(() => import('./Notification/Notification')); // adjust path as needed
const Pages = lazy(() => import('./Pages/Pages')); // adjust path as needed
const SocialMedia = lazy(() => import('../../Components/Footer/SocialMedia')); // adjust path as needed

const IndexPage = () => {
    return (
        <div>
            <Suspense fallback={<PageLoader />}>
                <ImageSlider />
                <Notification />
                <Pages />
                {/* <SocialMedia /> */}
                <ImpLinks/>
            </Suspense>
        </div>
    );
};

export default IndexPage;
