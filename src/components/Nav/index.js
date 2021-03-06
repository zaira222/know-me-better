import React, {useEffect} from 'react';
import About from '../About';
function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,


        
    } = props;

    useEffect(() => {
        document.title = (currentCategory.name);
    }, [currentCategory]);
    return (
        <header>
            <nav>
                
            <ul className='flex-row'>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li 
                        className={`mx-2 ${
                            currentCategory.name === category.name && 'navActive'
                        }`} 
                        key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                                }}>
                                {category.name}
                            </span>

                        </li>
                    ))}

                    </ul>
            </nav>
        </header>

    );
}

export default Nav;