import * as httprequest from '~/utils/httprequest';

export const getSuggested = async ({ page = 1, perPage = 5 }) => {
    try {
        const res = await httprequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
