import { memo } from 'react';
import PropTypes from 'prop-types';
import AccountItem from '~/components/AccountItem';

function SearchResult({ searchResult }) {
    return (
        <>
            {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
        </>
    );
}

SearchResult.propTypes = {
    searchResult: PropTypes.array,
};

export default memo(SearchResult);
