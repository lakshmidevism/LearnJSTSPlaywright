async function getExample(){
    return "abc";
}

import {test} from '@playwright/test';

test('uses await to handle async operations', async () => {
    let example = await getExample();
    console.log("Example:", example);
});
