import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Game from '@vkontakte/icons/dist/28/game';
import { platform, IOS, Gallery } from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon24Download from '@vkontakte/icons/dist/24/download';


import persik from '../img/persik.png';
import './Persik.css';

const osName = platform();

const Persik3 = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Новости</PanelHeader>
		<Tabbar>
          <TabbarItem fill="#0000FF"
            onClick={go}
            data-to="home"
          ><Icon28ServicesOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon24Download width={30} height={30} /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik3"
          ><Icon28ArticleOutline fill="#0000FF" /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik2"
          ><Icon28SettingsOutline /></TabbarItem>
        </Tabbar>
         
        <Gallery
                slideWidth="80%"
                style={{ height: 150 }}
                bullets="dark"
              >
                <div>
                <img src="https://sun9-40.userapi.com/c857428/v857428281/129f55/z9pT8aN9oI0.jpg" width="295" />
                </div>
                <div>
                <img src="https://sun9-49.userapi.com/c857320/v857320281/87407/cUS8JspjNQU.jpg" width="295" />
                </div>
                <div>
                <img src="https://sun9-25.userapi.com/c858424/v858424182/35bd1/TbJ3vc2RMDA.jpg" />
                </div>
              </Gallery>
        <Group>
        <Div>
        <div style={{ display: 'flex' }}>
        <b>Версия 1.0</b><h> </h><div className="Cell__description">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 22.12.2019</div>
        
        </div>
        </Div>
        <Div>
        <i>Релиз приложения.</i>
        </Div>
        </Group>
	</Panel>
);

Persik3.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Persik3;
