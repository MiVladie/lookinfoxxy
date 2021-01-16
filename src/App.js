import React from 'react';

import Layout from './hoc/Layout/Layout';

import Navigation from './containers/Navigation/Navigation';
import Banner from './containers/Banner/Banner';
import Section from './hoc/Section/Section';
import Footer from './containers/Footer/Footer';

import Team from './components/Team/Team';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

const App = () => (
    <Layout>
        <Navigation />

        <Banner />

        <Section 
            id = 'welcome'
            name = 'Welcome'
            description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium. Mauris maximus risus ac urna ullamcorper ullamcorper eget et justo. In rutrum nulla eu volutpat consectetur. Etiam nisi libero, fringilla at luctus ut, elementum non arcu. Proin nulla lorem, eleifend nec aliquam ut, tristique id ex. Donec finibus tincidunt vehicula. Aenean a sodales neque. Nulla rutrum ipsum ut turpis maximus, at interdum odio efficitur.'>
        </Section>

        <Section 
            id = 'team'
            name = 'Team'
            description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium. Mauris maximus risus ac urna ullamcorper ullamcorper eget et justo.'>
            <Team />
        </Section>

        <Section 
            id = 'services'
            name = 'Services'
            description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium. Mauris maximus risus ac urna ullamcorper ullamcorper eget et justo.'>
            <Services />
        </Section> 

        <Section 
            id = 'gallery'
            name = 'Gallery'
            description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium. Mauris maximus risus ac urna ullamcorper ullamcorper eget et justo.'>
            <Gallery />
        </Section> 

        <Section 
            id = 'testimonials'
            name = 'Testimonials'
            description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium. Mauris maximus risus ac urna ullamcorper ullamcorper eget et justo.'>
            <Testimonials />
        </Section>  

        <Section 
            id = 'contact'
            name = 'Contact'
            description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium. Mauris maximus risus ac urna ullamcorper ullamcorper eget et justo.'>
            <Contact />
        </Section>  

        <Footer />
    </Layout>
);

export default App;
