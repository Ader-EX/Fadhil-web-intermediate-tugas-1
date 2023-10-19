export async function getDogList(id) {
  const dataSet = {
    1: {
      title: 'Cathys Dog',
      description:
        'Meet Max, the playful and energetic Border Collie. Max is always up for a game of fetch and enjoys long walks in the park. He`s a loyal and loving companion who brightens up your day with his boundless enthusiasm',
      date: 'Oct 10, 2023',
      image:
        'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/07-06/small+white+fluffy+dog+smiling+at+the+camera+in+close-up-min.jpg',
    },
    2: {
      title: 'Larry`s Dog',
      description:
        "Lola is a sweet and gentle Golden Retriever. She's known for her friendly nature and wagging tail. Lola loves cuddling on the couch and is the perfect family dog, bringing joy to everyone she meets.",
      date: 'Oct 20, 2022',
    },
    3: {
      title: 'Mary`s Dog',
      description:
        "Introducing Rocky, the adventurous Siberian Husky. Rocky is a thrill-seeker who adores outdoor adventures like hiking and sledding. With his striking blue eyes and fluffy coat, he's not just a dog; he's a true explorer's best friend.",
      date: 'Oct 30, 2022',
    },
  };
  return dataSet[id];
}

export async function getDogId() {
  return [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ];
}
