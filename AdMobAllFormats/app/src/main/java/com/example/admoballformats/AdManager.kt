package com.example.admoballformats

import android.app.Activity
import android.util.DisplayMetrics
import android.view.LayoutInflater
import android.view.View
import android.widget.FrameLayout
import androidx.activity.ComponentActivity
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.LifecycleOwner
import com.example.admoballformats.databinding.AdNativeTemplateBinding
import com.google.android.gms.ads.AdError
import com.google.android.gms.ads.AdRequest
import com.google.android.gms.ads.AdSize
import com.google.android.gms.ads.AdView
import com.google.android.gms.ads.FullScreenContentCallback
import com.google.android.gms.ads.LoadAdError
import com.google.android.gms.ads.MobileAds
import com.google.android.gms.ads.nativead.NativeAd
import com.google.android.gms.ads.nativead.NativeAdOptions
import com.google.android.gms.ads.nativead.NativeAdView
import com.google.android.gms.ads.rewarded.RewardItem
import com.google.android.gms.ads.rewarded.RewardedAd
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback
import com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd
import com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAdLoadCallback
import com.google.android.gms.ads.interstitial.InterstitialAd
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback

object AdManager : DefaultLifecycleObserver {

    private const val ADAPTIVE_BANNER_UNIT_ID = "ca-app-pub-3940256099942544/9214589741"
    private const val INTERSTITIAL_UNIT_ID = "ca-app-pub-3940256099942544/1033173712"
    private const val REWARDED_UNIT_ID = "ca-app-pub-3940256099942544/5224354917"
    private const val REWARDED_INTERSTITIAL_UNIT_ID = "ca-app-pub-3940256099942544/5354046379"
    private const val NATIVE_UNIT_ID = "ca-app-pub-3940256099942544/2247696110"

    private var initialized = false
    private var bannerAdView: AdView? = null
    private var interstitialAd: InterstitialAd? = null
    private var rewardedAd: RewardedAd? = null
    private var rewardedInterstitialAd: RewardedInterstitialAd? = null
    private var nativeAd: NativeAd? = null

    fun initialize(activity: ComponentActivity) {
        if (!initialized) {
            MobileAds.initialize(activity.applicationContext)
            initialized = true
        }
        activity.lifecycle.addObserver(this)
    }

    fun loadAdaptiveBanner(
        activity: Activity,
        adView: AdView,
        onLoaded: () -> Unit,
        onFailed: (LoadAdError) -> Unit
    ) {
        bannerAdView = adView
        if (adView.adUnitId != ADAPTIVE_BANNER_UNIT_ID) {
            adView.adUnitId = ADAPTIVE_BANNER_UNIT_ID
        }
        adView.adListener = object : com.google.android.gms.ads.AdListener() {
            override fun onAdLoaded() {
                onLoaded()
            }

            override fun onAdFailedToLoad(error: LoadAdError) {
                onFailed(error)
            }
        }
        adView.post {
            val adSize = calculateAdaptiveAdSize(activity, adView)
            adView.setAdSize(adSize)
            adView.loadAd(AdRequest.Builder().build())
        }
    }

    fun loadInterstitial(
        activity: Activity,
        onLoaded: () -> Unit,
        onFailed: (LoadAdError) -> Unit
    ) {
        InterstitialAd.load(
            activity,
            INTERSTITIAL_UNIT_ID,
            AdRequest.Builder().build(),
            object : InterstitialAdLoadCallback() {
                override fun onAdLoaded(ad: InterstitialAd) {
                    interstitialAd = ad
                    onLoaded()
                }

                override fun onAdFailedToLoad(error: LoadAdError) {
                    interstitialAd = null
                    onFailed(error)
                }
            }
        )
    }

    fun showInterstitial(
        activity: Activity,
        onDismissed: () -> Unit,
        onFailedToShow: (AdError) -> Unit
    ) {
        val ad = interstitialAd ?: return
        ad.fullScreenContentCallback = object : FullScreenContentCallback() {
            override fun onAdDismissedFullScreenContent() {
                interstitialAd = null
                onDismissed()
            }

            override fun onAdFailedToShowFullScreenContent(adError: AdError) {
                interstitialAd = null
                onFailedToShow(adError)
            }
        }
        ad.show(activity)
    }

    fun loadRewarded(
        activity: Activity,
        onLoaded: () -> Unit,
        onFailed: (LoadAdError) -> Unit
    ) {
        RewardedAd.load(
            activity,
            REWARDED_UNIT_ID,
            AdRequest.Builder().build(),
            object : RewardedAdLoadCallback() {
                override fun onAdLoaded(ad: RewardedAd) {
                    rewardedAd = ad
                    onLoaded()
                }

                override fun onAdFailedToLoad(error: LoadAdError) {
                    rewardedAd = null
                    onFailed(error)
                }
            }
        )
    }

    fun showRewarded(
        activity: Activity,
        onReward: (RewardItem) -> Unit,
        onDismissed: () -> Unit,
        onFailedToShow: (AdError) -> Unit
    ) {
        val ad = rewardedAd ?: return
        ad.fullScreenContentCallback = object : FullScreenContentCallback() {
            override fun onAdDismissedFullScreenContent() {
                rewardedAd = null
                onDismissed()
            }

            override fun onAdFailedToShowFullScreenContent(adError: AdError) {
                rewardedAd = null
                onFailedToShow(adError)
            }
        }
        ad.show(activity) { rewardItem ->
            onReward(rewardItem)
        }
    }

    fun loadRewardedInterstitial(
        activity: Activity,
        onLoaded: () -> Unit,
        onFailed: (LoadAdError) -> Unit
    ) {
        RewardedInterstitialAd.load(
            activity,
            REWARDED_INTERSTITIAL_UNIT_ID,
            AdRequest.Builder().build(),
            object : RewardedInterstitialAdLoadCallback() {
                override fun onAdLoaded(ad: RewardedInterstitialAd) {
                    rewardedInterstitialAd = ad
                    onLoaded()
                }

                override fun onAdFailedToLoad(error: LoadAdError) {
                    rewardedInterstitialAd = null
                    onFailed(error)
                }
            }
        )
    }

    fun showRewardedInterstitial(
        activity: Activity,
        onReward: (RewardItem) -> Unit,
        onDismissed: () -> Unit,
        onFailedToShow: (AdError) -> Unit
    ) {
        val ad = rewardedInterstitialAd ?: return
        ad.fullScreenContentCallback = object : FullScreenContentCallback() {
            override fun onAdDismissedFullScreenContent() {
                rewardedInterstitialAd = null
                onDismissed()
            }

            override fun onAdFailedToShowFullScreenContent(adError: AdError) {
                rewardedInterstitialAd = null
                onFailedToShow(adError)
            }
        }
        ad.show(activity) { rewardItem ->
            onReward(rewardItem)
        }
    }

    fun loadNative(
        activity: Activity,
        container: FrameLayout,
        onLoaded: () -> Unit,
        onFailed: (LoadAdError) -> Unit
    ) {
        nativeAd?.destroy()
        nativeAd = null

        val builder = AdLoaderBuilderCompat(activity)
        builder.load(
            adUnitId = NATIVE_UNIT_ID,
            onNativeAdLoaded = { ad ->
                nativeAd = ad
                val binding = AdNativeTemplateBinding.inflate(LayoutInflater.from(activity), container, false)
                populateNativeAdView(binding, ad)
                container.removeAllViews()
                container.addView(binding.root)
                onLoaded()
            },
            onAdFailedToLoad = onFailed
        )
    }

    override fun onResume(owner: LifecycleOwner) {
        bannerAdView?.resume()
    }

    override fun onPause(owner: LifecycleOwner) {
        bannerAdView?.pause()
    }

    override fun onDestroy(owner: LifecycleOwner) {
        bannerAdView?.destroy()
        bannerAdView = null
        interstitialAd = null
        rewardedAd = null
        rewardedInterstitialAd = null
        nativeAd?.destroy()
        nativeAd = null
    }

    private fun calculateAdaptiveAdSize(activity: Activity, adView: AdView): AdSize {
        val metrics: DisplayMetrics = activity.resources.displayMetrics
        val density = metrics.density
        val adWidthPixels = if (adView.width > 0) {
            adView.width.toFloat()
        } else {
            metrics.widthPixels.toFloat()
        }
        val adWidth = (adWidthPixels / density).toInt()
        return AdSize.getCurrentOrientationAnchoredAdaptiveBannerAdSize(activity, adWidth)
    }

    private fun populateNativeAdView(binding: AdNativeTemplateBinding, nativeAd: NativeAd) {
        val nativeAdView = binding.root as NativeAdView
        nativeAdView.headlineView = binding.nativeAdHeadline
        nativeAdView.bodyView = binding.nativeAdBody
        nativeAdView.iconView = binding.nativeAdIcon
        nativeAdView.callToActionView = binding.nativeAdCallToAction
        nativeAdView.mediaView = binding.nativeAdMedia
        nativeAdView.starRatingView = binding.nativeAdStarRating

        binding.nativeAdHeadline.text = nativeAd.headline
        binding.nativeAdBody.apply {
            text = nativeAd.body
            visibility = if (nativeAd.body.isNullOrEmpty()) View.GONE else View.VISIBLE
        }

        nativeAd.icon?.let { icon ->
            binding.nativeAdIcon.setImageDrawable(icon.drawable)
            binding.nativeAdIcon.visibility = View.VISIBLE
        } ?: run {
            binding.nativeAdIcon.visibility = View.GONE
        }

        nativeAd.mediaContent?.let { mediaContent ->
            binding.nativeAdMedia.mediaContent = mediaContent
        }

        binding.nativeAdCallToAction.apply {
            text = nativeAd.callToAction
            visibility = if (nativeAd.callToAction.isNullOrEmpty()) View.GONE else View.VISIBLE
        }

        binding.nativeAdStarRating.apply {
            val rating = nativeAd.starRating
            if (rating != null) {
                rating.toFloat().let { starValue ->
                    this.rating = starValue
                }
                visibility = View.VISIBLE
            } else {
                visibility = View.GONE
            }
        }

        nativeAdView.setNativeAd(nativeAd)
    }

    private class AdLoaderBuilderCompat(private val activity: Activity) {
        fun load(
            adUnitId: String,
            onNativeAdLoaded: (NativeAd) -> Unit,
            onAdFailedToLoad: (LoadAdError) -> Unit
        ) {
            val adLoader = com.google.android.gms.ads.AdLoader.Builder(activity, adUnitId)
                .forNativeAd { nativeAd ->
                    onNativeAdLoaded(nativeAd)
                }
                .withAdListener(object : com.google.android.gms.ads.AdListener() {
                    override fun onAdFailedToLoad(error: LoadAdError) {
                        onAdFailedToLoad(error)
                    }
                })
                .withNativeAdOptions(
                    NativeAdOptions.Builder()
                        .setRequestMultipleImages(false)
                        .build()
                )
                .build()

            adLoader.loadAd(AdRequest.Builder().build())
        }
    }
}
