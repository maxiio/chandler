import React from 'react';
import {View} from 'react-native';

import {Navbar} from '@components';
import {I18n} from '@i18n';
import {appScreensStyles} from '@theme';

export const JournalScreen = () => (
  <View style={appScreensStyles.container}>
    <Navbar title={I18n.t('common:journal')} />
  </View>
);
