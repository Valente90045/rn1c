import React from 'react';

import styled from 'styled-components/native';

const page = styled.SafeAreaView`
  width: 200;
  height: 200;
  background-color: '#FF0000';
`;

const texto = styled.Text`
  color: '#FFF';
  fontsize: 16;
`;

export default () => {
  return (
    <page>
      <texto> Olá Mundo! </texto>
      <texto> Segundo texto enviado. </texto>
      <texto> Terceiro texto com fonte alterada. </texto>
    </page>
  );
};
