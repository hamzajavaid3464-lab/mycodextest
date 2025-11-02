package com.example.admoballformats

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.admoballformats.databinding.ActivityMainBinding
import com.google.android.gms.ads.AdError
import com.google.android.gms.ads.LoadAdError

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        AdManager.initialize(this)
        setupBanner()
        setupInterstitialCard()
        setupRewardedCard()
        setupRewardedInterstitialCard()
        setupNativeCard()
    }

    private fun setupBanner() {
        AdManager.loadAdaptiveBanner(
            activity = this,
            adView = binding.adaptiveBannerView,
            onLoaded = {
                showShortToast(getString(R.string.status_loaded))
            },
            onFailed = { error -> handleLoadError(error) }
        )
    }

    private fun setupInterstitialCard() {
        binding.loadInterstitialButton.setOnClickListener {
            AdManager.loadInterstitial(
                activity = this,
                onLoaded = {
                    binding.showInterstitialButton.isEnabled = true
                    showShortToast(getString(R.string.status_loaded))
                },
                onFailed = { error ->
                    binding.showInterstitialButton.isEnabled = false
                    handleLoadError(error)
                }
            )
        }

        binding.showInterstitialButton.setOnClickListener {
            AdManager.showInterstitial(
                activity = this,
                onDismissed = {
                    binding.showInterstitialButton.isEnabled = false
                },
                onFailedToShow = { adError -> handleShowError(adError) }
            )
        }
    }

    private fun setupRewardedCard() {
        binding.loadRewardedButton.setOnClickListener {
            AdManager.loadRewarded(
                activity = this,
                onLoaded = {
                    binding.showRewardedButton.isEnabled = true
                    showShortToast(getString(R.string.status_loaded))
                },
                onFailed = { error ->
                    binding.showRewardedButton.isEnabled = false
                    handleLoadError(error)
                }
            )
        }

        binding.showRewardedButton.setOnClickListener {
            AdManager.showRewarded(
                activity = this,
                onReward = { reward ->
                    showShortToast(getString(R.string.reward_toast, reward.type, reward.amount))
                },
                onDismissed = {
                    binding.showRewardedButton.isEnabled = false
                },
                onFailedToShow = { adError -> handleShowError(adError) }
            )
        }
    }

    private fun setupRewardedInterstitialCard() {
        binding.loadRewardedInterstitialButton.setOnClickListener {
            AdManager.loadRewardedInterstitial(
                activity = this,
                onLoaded = {
                    binding.showRewardedInterstitialButton.isEnabled = true
                    showShortToast(getString(R.string.status_loaded))
                },
                onFailed = { error ->
                    binding.showRewardedInterstitialButton.isEnabled = false
                    handleLoadError(error)
                }
            )
        }

        binding.showRewardedInterstitialButton.setOnClickListener {
            AdManager.showRewardedInterstitial(
                activity = this,
                onReward = { reward ->
                    showShortToast(getString(R.string.reward_toast, reward.type, reward.amount))
                },
                onDismissed = {
                    binding.showRewardedInterstitialButton.isEnabled = false
                },
                onFailedToShow = { adError -> handleShowError(adError) }
            )
        }
    }

    private fun setupNativeCard() {
        binding.loadNativeButton.setOnClickListener {
            AdManager.loadNative(
                activity = this,
                container = binding.nativeAdContainer,
                onLoaded = {
                    showShortToast(getString(R.string.native_loaded))
                },
                onFailed = { error ->
                    binding.nativeAdContainer.removeAllViews()
                    showShortToast(getString(R.string.native_failed, error.message))
                }
            )
        }
    }

    private fun handleLoadError(error: LoadAdError) {
        showShortToast(getString(R.string.status_failed, error.message ?: error.code.toString()))
    }

    private fun handleShowError(error: AdError) {
        showShortToast(getString(R.string.status_failed, error.message))
    }

    private fun showShortToast(message: String) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
    }
}
