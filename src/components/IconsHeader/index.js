import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icons = [perfil, sacola];
function IconsHeader() {
    return (
        <Icones>
            {icons.map((icone) => (
                <Icone><img src={icone}></img></Icone>
            ))}
        </Icones>
    );
};

export default IconsHeader;