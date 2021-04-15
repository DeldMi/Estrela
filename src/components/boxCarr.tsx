import styles from '../Styles/components/BoxCarr.module.css';




export function BoxCarr() {
    return (
        <div className={styles.boxCarrinho}>
            <div className={styles.boxCarrinhoT}>
                <img
                    src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-shopping-cart-icon-shopping-cart-by-vexels.png"
                    alt="Carrinho" />
                <p>Itens</p>


                <input type="number" disabled />
            </div>

        </div>
    );
}


