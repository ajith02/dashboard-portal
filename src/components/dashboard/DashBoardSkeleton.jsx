import {
  Box,
  Skeleton,
  Stack,
  useMediaQuery,
  useTheme
} from "@mui/material";

export default function DashboardSkeleton() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        bgcolor: "#F7F7FA",
        minHeight: "100vh",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            mb: 2,
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Skeleton
              variant="text"
              width={isMobile ? 200 : 300}
              height={isMobile ? 36 : 48}
              sx={{
                borderRadius: 1,
                mb: 1,
                background: `linear-gradient(90deg, rgba(108, 93, 211, 0.1), rgba(154, 140, 255, 0.1))`,
              }}
            />
          </Box>
          <Skeleton
            variant="rounded"
            width={60}
            height={28}
            sx={{
              borderRadius: "12px",
              mt: { xs: 1, sm: 0 },
            }}
          />
        </Box>

        <Stack
          direction="row"
          spacing={1}
          sx={{ flexWrap: "wrap", gap: 1, mt: 2 }}
        >
          {["Today", "This Quarter"].map((label) => (
            <Skeleton
              key={label}
              variant="rounded"
              width={isMobile ? 70 : 90}
              height={32}
              sx={{ borderRadius: "12px" }}
            />
          ))}
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          mb: 4,
          "& > *": {
            flex: isMobile ? "1 1 100%" : "1 1 calc(25% - 18px)",
            minWidth: isMobile ? "100%" : "250px",
          },
        }}
      >
        {Array.from({ length: 4 }).map((_, idx) => (
          <Box
            key={idx}
            sx={{
              borderRadius: 3,
              p: 3,
              border: `1px solid rgba(108, 93, 211, 0.1)`,
              boxShadow: "0 8px 32px rgba(108, 93, 211, 0.08)",
              height: 140,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              bgcolor: "#fff",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Skeleton
                variant="circular"
                width={48}
                height={48}
                sx={{
                  borderRadius: 2,
                  bgcolor: "rgba(108, 93, 211, 0.1)",
                }}
              />
              <Skeleton
                variant="rounded"
                width={70}
                height={28}
                sx={{
                  borderRadius: "10px",
                  bgcolor:
                    idx % 2 === 0
                      ? "rgba(74, 222, 128, 0.1)"
                      : "rgba(248, 114, 114, 0.1)",
                }}
              />
            </Stack>

            <Box>
              <Skeleton
                variant="text"
                width={isMobile ? "60%" : "70%"}
                height={34}
                sx={{
                  borderRadius: 1,
                  bgcolor: "rgba(30, 30, 47, 0.1)",
                }}
              />
              <Skeleton
                variant="text"
                width={isMobile ? "40%" : "50%"}
                height={20}
                sx={{
                  borderRadius: 1,
                  bgcolor: "rgba(107, 107, 122, 0.1)",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isTablet ? "column" : "row",
          gap: 3,
          mb: 3,
        }}
      >
        <Box
          sx={{
            flex: isTablet ? "1 1 100%" : "2 1 0%",
            borderRadius: 3,
            p: 3,
            border: `1px solid rgba(108, 93, 211, 0.1)`,
            boxShadow: "0 8px 32px rgba(108, 93, 211, 0.08)",
            bgcolor: "#fff",
            height: isMobile ? 250 : 320,
            minWidth: 0,
          }}
        >
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="space-between"
            alignItems={isMobile ? "flex-start" : "center"}
            gap={isMobile ? 2 : 0}
            mb={3}
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <Skeleton
                variant="circular"
                width={24}
                height={24}
                sx={{ color: "#6C5DD3" }}
              />
              <Skeleton
                variant="text"
                width={140}
                height={28}
                sx={{ borderRadius: 1 }}
              />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Skeleton
                variant="rounded"
                width={70}
                height={28}
                sx={{ borderRadius: "8px" }}
              />
              <Skeleton
                variant="rounded"
                width={70}
                height={28}
                sx={{
                  borderRadius: "8px",
                  bgcolor: "rgba(107, 107, 122, 0.1)",
                }}
              />
            </Stack>
          </Stack>

          <Box sx={{ height: "calc(100% - 60px)", position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "80%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
              }}
            >
              {[30, 60, 40, 80, 50, 70, 45, 65, 55, 75, 35, 85].map(
                (height, idx) => (
                  <Skeleton
                    key={idx}
                    variant="rounded"
                    width={isMobile ? 10 : 14}
                    height={`${height}%`}
                    sx={{
                      borderRadius: "4px 4px 0 0",
                      bgcolor: "rgba(108, 93, 211, 0.15)",
                    }}
                  />
                )
              )}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: isTablet ? "1 1 100%" : "1 1 0%",
            borderRadius: 3,
            p: 3,
            border: `1px solid rgba(108, 93, 211, 0.1)`,
            boxShadow: "0 8px 32px rgba(108, 93, 211, 0.08)",
            bgcolor: "#fff",
            height: isMobile ? 250 : 320,
            minWidth: 0,
          }}
        >
          <Stack direction="row" alignItems="center" gap={1} mb={3}>
            <Skeleton
              variant="circular"
              width={24}
              height={24}
              sx={{ color: "#FF758F" }}
            />
            <Skeleton
              variant="text"
              width={140}
              height={28}
              sx={{ borderRadius: 1 }}
            />
          </Stack>

          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={3}
            sx={{ height: "calc(100% - 50px)" }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Skeleton
                variant="circular"
                width={isMobile ? 100 : 140}
                height={isMobile ? 100 : 140}
              />
            </Box>

            <Stack spacing={2} sx={{ flex: 1, justifyContent: "center" }}>
              {["Electronics", "Grocery", "Furniture", "Fashion"].map(
                (label) => (
                  <Stack
                    key={label}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Skeleton variant="circular" width={10} height={10} />
                      <Skeleton
                        variant="text"
                        width={80}
                        height={20}
                        sx={{ borderRadius: 1 }}
                      />
                    </Stack>
                    <Skeleton
                      variant="text"
                      width={40}
                      height={20}
                      sx={{ borderRadius: 1 }}
                    />
                  </Stack>
                )
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isTablet ? "column" : "row",
          gap: 3,
        }}
      >
        <Box
          sx={{
            flex: isTablet ? "1 1 100%" : "1 1 0%",
            borderRadius: 3,
            p: 3,
            border: `1px solid rgba(108, 93, 211, 0.1)`,
            boxShadow: "0 8px 32px rgba(108, 93, 211, 0.08)",
            bgcolor: "#fff",
            height: 280,
            minWidth: 0,
          }}
        >
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="space-between"
            alignItems={isMobile ? "flex-start" : "center"}
            gap={isMobile ? 2 : 0}
            mb={3}
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <Skeleton
                variant="circular"
                width={24}
                height={24}
                sx={{ color: "#4ADE80" }}
              />
              <Box>
                <Skeleton
                  variant="text"
                  width={120}
                  height={28}
                  sx={{ borderRadius: 1 }}
                />
                <Skeleton
                  variant="text"
                  width={180}
                  height={18}
                  sx={{ borderRadius: 1, mt: 0.5 }}
                />
              </Box>
            </Stack>
            <Skeleton
              variant="rounded"
              width={100}
              height={28}
              sx={{ borderRadius: "12px" }}
            />
          </Stack>

          <Box sx={{ height: "calc(100% - 70px)" }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                px: 1,
              }}
            >
              {[
                "Day 1",
                "Day 2",
                "Day 3",
                "Day 4",
                "Day 5",
                "Day 6",
                "Day 7",
              ].map((day, idx) => (
                <Box
                  key={day}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "12%",
                  }}
                >
                  <Skeleton
                    variant="rounded"
                    width="80%"
                    height={`${30 + idx * 12}%`}
                    sx={{
                      borderRadius: "6px 6px 0 0",
                      bgcolor: "rgba(74, 222, 128, 0.15)",
                    }}
                  />
                  <Skeleton
                    variant="text"
                    width={30}
                    height={20}
                    sx={{ mt: 1, borderRadius: 1 }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: isTablet ? "1 1 100%" : "1 1 0%",
            borderRadius: 3,
            p: 3,
            border: `1px solid rgba(108, 93, 211, 0.1)`,
            boxShadow: "0 8px 32px rgba(108, 93, 211, 0.08)",
            bgcolor: "#fff",
            height: 280,
            minWidth: 0,
          }}
        >
          <Stack direction="row" alignItems="center" gap={1} mb={3}>
            <Skeleton
              variant="circular"
              width={24}
              height={24}
              sx={{ color: "#FACC15" }}
            />
            <Skeleton
              variant="text"
              width={160}
              height={28}
              sx={{ borderRadius: 1 }}
            />
          </Stack>

          <Stack spacing={3}>
            {["Conversion Rate", "Bounce Rate", "Session Duration"].map(
              (metric, idx) => (
                <Box key={metric}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <Skeleton
                      variant="text"
                      width={120}
                      height={22}
                      sx={{ borderRadius: 1 }}
                    />
                    <Skeleton
                      variant="text"
                      width={40}
                      height={22}
                      sx={{ borderRadius: 1 }}
                    />
                  </Stack>
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={8}
                    sx={{
                      borderRadius: 4,
                      bgcolor: "rgba(108, 93, 211, 0.1)",
                    }}
                  />
                </Box>
              )
            )}
          </Stack>
        </Box>
      </Box>

      <Box mt={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Skeleton
            variant="text"
            width={150}
            height={28}
            sx={{ borderRadius: 1 }}
          />
          <Skeleton
            variant="text"
            width={180}
            height={20}
            sx={{ borderRadius: 1 }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            "& > *": {
              flex: "1 1 calc(25% - 24px)",
              minWidth: isMobile ? "100%" : "200px",
            },
          }}
        >
          {["CPU Usage", "Memory", "Disk", "Network"].map((label, idx) => (
            <Box
              key={label}
              sx={{
                borderRadius: 3,
                p: 3,
                border: `1px solid rgba(108, 93, 211, 0.1)`,
                boxShadow: "0 8px 32px rgba(108, 93, 211, 0.08)",
                bgcolor: "#fff",
                height: 140,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  bgcolor: "rgba(108, 93, 211, 0.1)",
                }}
              />
              <Skeleton
                variant="text"
                width="100%"
                height={32}
                sx={{ borderRadius: 1, mb: 1 }}
              />
              <Skeleton
                variant="text"
                width="60%"
                height={20}
                sx={{ borderRadius: 1, mb: 2 }}
              />
              <Skeleton
                variant="rounded"
                width={70}
                height={28}
                sx={{ borderRadius: "12px" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
