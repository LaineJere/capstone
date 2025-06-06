import React from 'react';
import Item from './Item';
import Button from './Button';

const items = [
  {
    title: "Salada Grega",
    price: "12.99",
    description: "A famosa salada grega de alface crocante, pimentões, azeitonas e nosso queijo feta ao estilo de Chicago, guarnecida com croutons crocantes de alho e alecrim.",
    getImageSrc: () => require("../images/greek_salad.jpg")
  },
  {
    title: "Bruchetta",
    price: "5.99",
    description: "Nossa Bruschetta é feita de pão grelhado untado com alho e temperado com sal e azeite de oliva.",
    getImageSrc: () => require("../images/bruschetta.jpg")
  },
  {
    title: "Sobremesa De Limão",
    price: "7.99",
    description: "Isso vem direto do livro de receitas da vovó, cada ingrediente foi selecionado e é tão autêntico quanto se pode imaginar.",
    getImageSrc: () => require("../images/lemon_dessert.jpg")
  },

]


function ItemsSection() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h1>Especial</h1>
        <Button>Menu Online</Button>
      </div>
      <div className="specials-grid">
        {items.map((item) => (
          <Item
            key={item.title}
            title={item.title}
            price={item.price}
            description={item.description}
            imageSrc={item.getImageSrc()}
          />
        ))}
      </div>
    </section>
  );
}

export default ItemsSection;