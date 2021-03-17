import { expect } from 'chai';
import { SpectronClient } from 'spectron';

import commonSetup from './common-setup';

describe('angular-electron App', function () {

  commonSetup.apply(this);

  let client: SpectronClient;

  beforeEach(function() {
    client = this.app.client;
  });

  it('creates initial windows', async function () {
    const count = await client.getWindowCount();
    expect(count).to.equal(1);
  });

  it('should display a toolbar with the title "Material Design Components" and the option to select a theme', async function () {
    const elem = await client.$('mat-toolbar');
    const text = await elem.getText();
    expect(text).to.include('Material Design Components');
    expect(text).to.include('Select Theme');
  });

});
