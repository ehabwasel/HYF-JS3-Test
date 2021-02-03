const houseDataArray = [];
const killedLords = [];

async function getHouseList() {
    houseIdList.forEach(async id => {
        const houseData = await fetchData(`https://anapioficeandfire.com/api/houses/${id}`);

        const { name, currentLord } = houseData;

        houseDataArray.push({
            ...houseData,
            id,
        });

        let currentLordData;
        if (currentLord === '') {
            currentLordData = {
                name: 'Dead',
            }
        } else {
            currentLordData = await fetchData(currentLord);
        }

        appendHouseInformation(name, currentLordData.name, id);
    });
}

async function killARandomLord() {
    const randomHouseId = getRandomElement(houseIdList);
    const houseData = houseDataArray.find(house => house.id === randomHouseId);

    const { swornMembers } = houseData;

    let foundNonDeadNorReturnedSwornMember = false;
    let randomSwornMember;
    while(!foundNonDeadNorReturnedSwornMember) {
        randomSwornMember = getRandomElement(swornMembers);

        if (!killedLords.includes(randomSwornMember)) {
            killedLords.push(randomSwornMember);
            foundNonDeadNorReturnedSwornMember = true;
        }
    }

    const swornMemberData = await fetchData(randomSwornMember);
    const { name } = swornMemberData;


    const lordElement = document.getElementById(randomHouseId);
    lordElement.innerText = name;
}

const killButton = document.getElementById('kill-random-lord-button');
killButton.addEventListener('click', killARandomLord)

getHouseList();
