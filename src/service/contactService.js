import axios from 'axios';

const contactService = async (email, name) => {
    return axios(
        {
            method: 'POST',
            url: 'https://corebiz-test.herokuapp.com/api/v1/newsletter',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {"email": email, "name": name}
        })
};

export default contactService;