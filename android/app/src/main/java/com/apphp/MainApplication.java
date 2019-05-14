package com.apphp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.safaeean.barcodescanner.BarcodeScannerPackage;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import fr.snapp.imagebase64.RNImgToBase64Package;
import com.RNFetchBlob.RNFetchBlobPackage;
import org.reactnative.camera.RNCameraPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import com.terrylinla.rnsketchcanvas.SketchCanvasPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage(),
            new RNSoundPackage(),
            new BarcodeScannerPackage(),
            new ImageResizerPackage(),
            new PickerPackage(),
            new RNImgToBase64Package(),
            new RNFetchBlobPackage(),
            new RNCameraPackage(),
            new ReactNativeAudioPackage(),
            new SketchCanvasPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
