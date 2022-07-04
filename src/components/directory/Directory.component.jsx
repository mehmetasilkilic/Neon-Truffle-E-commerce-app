import './directory.styles.scss';

import DirectoryItem from '../directoryItem/DirectoryItem.component';

const Directory = ({ categories }) => {

    return (
        <div className="categories-container">
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory
