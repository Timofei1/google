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
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import Spinner from '@vkontakte/vkui/dist/components/Spinner/Spinner'
import { Separator } from '@vkontakte/vkui';
import { PanelHeaderBack, Epic, View, Switch, platform } from '@vkontakte/vkui';
import PanelSpinner from '@vkontakte/vkui/dist/components/PanelSpinner/PanelSpinner';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon24Download from '@vkontakte/icons/dist/24/download';
import Icon24Globe from '@vkontakte/icons/dist/24/globe';
import Icon24LogoGoogle from '@vkontakte/icons/dist/24/logo_google';
import Icon24Game from '@vkontakte/icons/dist/24/game';
import Icon24Video from '@vkontakte/icons/dist/24/video';
import Icon24Mention from '@vkontakte/icons/dist/24/mention';


const Home = ({ go, id}) => (
  
  

<Panel id={id}>
		<PanelHeader>Выбор сервиса</PanelHeader>
		 
       <Tabbar>
          <TabbarItem fill="#0000FF"
            onClick={go}
            data-to="home"
          ><Icon28ServicesOutline fill="#0000FF" /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon24Download width={30} height={30} /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik3"
          ><Icon28ArticleOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik2"
          ><Icon28SettingsOutline /></TabbarItem>
        </Tabbar>
        

        <Group title="Выбор Google сервиса">
            <Div>
                <Button size="xl" level="2" onClick={go} data-to="persik4" before={
                
                <Icon24Globe width={30} height={30} /> }>
                    Google Chcome
                
                </Button>
                <br/>
                <Button size="xl" level="2" onClick={go} data-to="persik5" before={
                 <Icon24LogoGoogle width={30} height={30}/>}>
                    Google Search
                
                </Button>
                <br/>
                <Button size="xl" level="2" onClick={go} data-to=" " before={
                  <Icon24Game width={30} height={30}/>}>
                    Google Play
                </Button>
                <br/>
                <Button size="xl" level="2" onClick={go} data-to=" " before={
                  <Icon24Video width={30} height={30}/>}>
                    YouTube
                </Button>
                <br/>
                <Button size="xl" level="2" onClick={go} data-to=" " before={
                  <Icon24Mention width={35} height={35} />  }>
                    GMail
                </Button>
                <br/>
                <Button size="xl" level="2" onClick={go} data-to=" " before={
                  <Icon24Video width={30} height={30}/>}>
                    YouTube
                </Button>
                <br/>
                <Button size="xl" level="2" onClick={go} data-to=" " before={
                  <Icon24Mention width={35} height={35} />  }>
                    GMail
                </Button>
            </Div>
            <br/>
        <br/>

          </Group>

	</Panel>
);




Home.propTypes = {
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

export default Home;