N*(N-1)*...*(N-K+1)*((N-K)^(L-K))

Mark likes to listen to music while travelling. His iPod™ contains N songs and he wants to listen to L (not necessarily different) songs during a trip. So he creates a playlist such that:
•        Every song is played at least once.
•        A song can be played again only if at least K other songs have been played
. from: 1point3acres
Mark wants to know how many different playlists are possible. Can you help Mark determine this number? As the number can be very large, display number modulo 1,000,000,007.

You are given N, K and L.
第一题就是用i从0到L循环，当i小于k的时候rtn = rtn * (N - i)
当i于k的时候rtn = rtn * (N - K)
