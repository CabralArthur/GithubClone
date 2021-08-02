import React from 'react';
import { PongSpinner } from 'react-spinners-kit';

import { Container } from './styles';

const Loader: React.FC = () => {
    return <Container>
        <div className='preloaderDiv'>
            <PongSpinner color='#24292E' loading={true} size={50}/>
        </div>
        <div className='preloaderDivBackground'/>
    </Container>
}

export default Loader;