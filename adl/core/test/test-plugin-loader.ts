import { rmdir } from '@azure-tools/async-io';
import { suite, test } from '@testdeck/mocha';
import * as assert from 'assert';
import { mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { ExtensionManager } from '../plugin/plugin-manager';
require('source-map-support').install();


@suite class TestExtensions {
  private tmpFolder = mkdtempSync(`${mkdtempSync(`${tmpdir()}/test`)}/install-pkg`);

  async after() {
    await rmdir(this.tmpFolder);
  }
  @test async 'FindPackage- in npm'() {
    const extensionManager = await ExtensionManager.Create(this.tmpFolder);
    const p = await extensionManager.findPackage('autorest');
    assert.equal(p.name, 'autorest');
  }

  @test async 'Install Extension'() {
    await rmdir(this.tmpFolder);
    const extensionManager = await ExtensionManager.Create(this.tmpFolder);
    // example - subscribe to messages 
    // extensionManager.on('message', (msg, msec)=> {
    // console.log(msg);
    // });
    const dni = await extensionManager.findPackage('echo-cli', '1.0.8');
    
    const installing = extensionManager.installPackage(dni, false, 5 * 60 * 1000);

    const extension = await installing;

    assert.notEqual(await extension, undefined);

    let done = false;

    for (const each of await extensionManager.getInstalledExtensions()) {
      done = true;
      // make sure we have one extension installed and that it is echo-cli (for testing)
      assert.equal(each.name, 'echo-cli');
    }

    assert.equal(done, true, 'Package is not installed');
  }

  @test async 'Install Extension via star'() {
    await rmdir( this.tmpFolder);
    const extensionManager = await ExtensionManager.Create(this.tmpFolder);
    
    const dni = await extensionManager.findPackage('echo-cli', '*');
    
    const extension = await extensionManager.installPackage(dni, false, 5 * 60 * 1000);

    assert.notEqual(await extension, undefined);

    let done = false;

    for (const each of await extensionManager.getInstalledExtensions()) {
      done = true;
      // make sure we have one extension installed and that it is echo-cli (for testing)
      assert.equal(each.name, 'echo-cli');
    }

    assert.equal(done, true, 'Package is not installed');

    try {
      const main = extensionManager.load(extension);
    }
    catch(e) {
      assert.equal(true,false, 'extension loader threw exception');
    }
    assert.equal(true, true, 'extension loader loaded module');
  }


  @test async 'FindPackage- unknown package'() {
    await rmdir(this.tmpFolder);
    const extensionManager = await ExtensionManager.Create(this.tmpFolder);

    let threw = false;
    try {
      const p = await extensionManager.findPackage('koooopasdpasdppasdpa');
    } catch (e) {
      if (e instanceof Error) {
        threw = true;
      }
    }
    assert.equal(threw, true, 'Expected unknown package to throw UnresolvedPackageException');
  }

  @test async 'BadPackageID- garbage name'() {
    await rmdir(this.tmpFolder);
    const extensionManager = await ExtensionManager.Create(this.tmpFolder);

    let threw = false;
    try {
      await extensionManager.findPackage('LLLLl', '$DDFOIDFJIODFJ');
    } catch (e) {
      if (e instanceof Error) {
        threw = true;
      }
    }
    assert.equal(threw, true, 'Expected bad package id to throw InvalidPackageIdentityException');
  }

  @test async 'View Versions'() {
    await rmdir(this.tmpFolder);
    const extensionManager = await ExtensionManager.Create(this.tmpFolder);

    // gets a package
    const pkg = await extensionManager.findPackage('echo-cli');
    
    // finds out if there are more versions
    const q = await pkg.allVersions;
    assert.strictEqual(q.length > 5, true);
  }

}