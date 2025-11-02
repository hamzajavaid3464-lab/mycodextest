# ProGuard rules for AdMob demo project
# Keep Google Mobile Ads classes to avoid stripping adapters
-keep class com.google.android.gms.ads.** { *; }
-keep interface com.google.android.gms.ads.** { *; }
-dontwarn com.google.android.gms.**

# Keep Kotlin metadata
-keepclassmembers class kotlin.Metadata { *; }
