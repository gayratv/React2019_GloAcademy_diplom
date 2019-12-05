import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = 
    (Wrapped) => {
        return (props) => {
            return (
                <RestoServiceContext.Consumer>
                    {
                        // {  Consumer принимает функцию в качестве дочернего компонента. 
                        //  Эта функция принимает текущее значение контекста и возвращает React-компонент }
                        (RestoService) => {
                            return <Wrapped {...props} RestoServiceProp={RestoService} />
                        }
                    }
                </RestoServiceContext.Consumer>
            )
        }
    };

export default WithRestoService;