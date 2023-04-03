
import { Link } from 'react-router-dom';
import capa from '../../assets/images/home/capa.png';
import {Helmet} from 'react-helmet';
 
import styles from './home.module.css';



const index = () =>{
    return(
        <div class={styles.container}>
            <Helmet>
                <title>Computação Plugada Ordenação</title>
            </Helmet>
            <div class={styles.content}>
                <img src={capa} alt="Cover" />
                <h2 class={styles.title}>O MAIS LEVE E O MAIS PESADO</h2>
                <Link to={"/LevelSelection"}>
                    <button type="button" class={styles.btn}>INICIAR</button>
                </Link>
            </div>
      </div>
    )
}

export default index;